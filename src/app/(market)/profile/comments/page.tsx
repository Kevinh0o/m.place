'use client';
import Comment from "@/client/components/profile/comment";
import { ProfileContext } from "@/client/contexts/profile-context";
import { useContext } from "react";

export default function ProfileComments() {
    const { user } = useContext(ProfileContext);
    
    return(
        <div className="p-2">
            <div>
                <h1 className="text-2xl">
                    Comentários
                </h1>
            </div>
            {user &&
                user.comments?.map((comment, index) => {
                    return(
                        <div key={index}>
                            <Comment
                                productId={comment.productId}
                                userId={comment.userId} 
                                date={comment.createdAt}
                                content={comment.content}
                            />
                        </div>
                    )
                })
            }
            {!user?.comments &&
                <div className="p-5">
                    <p>
                        Você não tem comentários.
                    </p>
                </div>
            }
        </div>
    )
}