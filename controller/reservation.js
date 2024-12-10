import ErrorHandler from "../error/err.js";
import Reservation from "../models/reservationSchema.js";

export const createReservation = async (req,res,next) => {
    const {firstName,lastName,email,phone,date,time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill all the fields",400));
    }
    try {
        await Reservation.create({firstName,lastName,email,phone,date,time});
        res.status(200).json({
            success:true,
            message:"Reservation created successfully",
        });
    } catch (error) {
        if(error.code === "validationError"){
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "),400));
        }

    }
}