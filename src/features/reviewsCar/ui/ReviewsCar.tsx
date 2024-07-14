import React from "react";
import { Button, Rating } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ITypePropsReviewsCar, TypeInputsReviewsCar } from "../model/typesReviewsCar";
import { useAppDispatch } from "../../../app/appStore";
import { patchCar } from "../../../entities/carblock/model/getCar";
import "./reviewsCar.scss";

const ReviewsCar: React.FC<ITypePropsReviewsCar> = (props): React.JSX.Element => {
    const { item, user } = props;
    const [ratingValue, setRatingValue] = React.useState<number | null>(5);
    const dispatch = useAppDispatch();
   
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<TypeInputsReviewsCar>()

    const onSubmit: SubmitHandler<TypeInputsReviewsCar> = (data) => {
        const id = item.id
        const changeData = [...item.reviews];

        const newData = {
            ...data,
            additionalId: user.data.additionalId,
            avatar: user.data.imgUrl ? user.data.imgUrl : '',
            name: user.data.name
        };

        const checkId = !item.reviews.some((item) => item.additionalId === user.data.additionalId)

        if(checkId) {
           changeData.push(newData);
        }
        
        dispatch(patchCar({id, changeData}))
    
    };

    setValue('rating', ratingValue);

  
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="reviews-car">
            <textarea {...register('comment')} className="reviews-car__textarea" placeholder="Опиштите свой отзыв"></textarea>
            <br/>
            <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(_, newValue) => {
                    setRatingValue(newValue);
                }}
            />
            <br/>
            <Button type="submit" variant="outlined">Outlined</Button>
        </form>
    );
}

export default ReviewsCar;