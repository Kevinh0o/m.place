'use client';
import Order from "@/client/components/profile/order";
import { ProfileContext } from "@/client/contexts/profile-context";
import { useContext, useEffect } from "react";

export default function ProfileOrders() {
    const { user } = useContext(ProfileContext);

    return(
        <div className="p-2 h-full overflow-x-hidden overflow-y-scroll">
            <div>
                <h1 className="text-2xl">
                    Pedidos
                </h1>
            </div>
            <div className="flex flex-col gap-2">
                {user &&
                    user.orders?.map((order, index) => {
                        return(
                            <div key={index}>
                                <Order
                                    createdAt={order.createdAt}
                                    totalPrice={order.totalPrice}
                                    status={order.status}
                                    orderId={order.id}
                                />
                            </div>
                        )
                    })
                }
            </div>
            {!user?.orders &&
                <div className="p-5">
                    <p>
                        Você não tem pedidos.
                    </p>
                </div>
            }
        </div>
    )
}