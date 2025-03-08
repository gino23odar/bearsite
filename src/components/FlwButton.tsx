import clsx from "clsx";
import React from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
    return (
        <button className={clsx("flwbtn w-fit cursor-pointer overflow-hidden bg-violet-50 px-7 py-16 text-black", containerClass)}>
            <div className="flwwrapper">


                <p className="flwtext flex items-center gap-1">{title} {rightIcon}</p>

                <div className="flwflower flwflower1">
                    <div className="flwpetal flwone"></div>
                    <div className="flwpetal flwtwo"></div>
                    <div className="flwpetal flwthree"></div>
                    <div className="flwpetal flwfour"></div>
                </div>
                <div className="flwflower flwflower2">
                    <div className="flwpetal flwone"></div>
                    <div className="flwpetal flwtwo"></div>
                    <div className="flwpetal flwthree"></div>
                    <div className="flwpetal flwfour"></div>
                </div>
                <div className="flwflower flwflower3">
                    <div className="flwpetal flwone"></div>
                    <div className="flwpetal flwtwo"></div>
                    <div className="flwpetal flwthree"></div>
                    <div className="flwpetal flwfour"></div>
                </div>
                <div className="flwflower flwflower4">
                    <div className="flwpetal flwone"></div>
                    <div className="flwpetal flwtwo"></div>
                    <div className="flwpetal flwthree"></div>
                    <div className="flwpetal flwfour"></div>
                </div>
                <div className="flwflower flwflower5">
                    <div className="flwpetal flwone"></div>
                    <div className="flwpetal flwtwo"></div>
                    <div className="flwpetal flwthree"></div>
                    <div className="flwpetal flwfour"></div>
                </div>
                <div className="flwflower flwflower6">
                    <div className="flwpetal flwone"></div>
                    <div className="flwpetal flwtwo"></div>
                    <div className="flwpetal flwthree"></div>
                    <div className="flwpetal flwfour"></div>
                </div>
            </div>
        </button>

    );
};

export default Button;

