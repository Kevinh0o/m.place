'use client';
import Comment from "@/client/components/profile/comment";
import { ProfileContext } from "@/client/contexts/profile-context";
import { useContext, useEffect } from "react";

export default function ProfileComments() {
    const { user } = useContext(ProfileContext);

    if(!user) return null;
    
    return(
        <div className="p-2 h-full overflow-x-hidden overflow-y-scroll">
            <div>
                <h1 className="text-2xl">
                    Comentários
                </h1>
            </div>
            {user.comments.length >= 0 &&
                user.comments.map((comment, index) => {
                    return(
                        <div key={comment.id}>
                            <Comment
                                productId={comment.productId}
                                userId={comment.userId} 
                                date={comment.createdAt}
                                content={comment.content}
                                id={comment.id}
                            />
                        </div>
                    )
                })
            }
            {user.comments.length <= 0 &&
                <div className="p-5">
                    <p>
                        Você não tem comentários.
                    </p>
                </div>
            }
        </div>
    )
}