import React from "react";

export const Loading = () => {
    return (
        <div className=" flex justify-center items-center w-full m-auto h-screen flex-wrap bg-slate-800/30 backdrop-blur-lg">
            <h2 className="text-center text-white font-bold text-5xl lg:w-full w-10/12 m-auto mb-60">Cargando información</h2>
            <div class="lds-ripple w-full -mt-96 mb-44">
                <div>
                </div>
                <div>  
                </div>
        </div>
        </div>
    );
}