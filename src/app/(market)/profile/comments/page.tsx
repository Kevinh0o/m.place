'use client';
import Comment from "@/client/components/profile/comment";
import { ProfileContext } from "@/client/contexts/profile-context";
import { useContext } from "react";

export default function ProfileComments() {
    const {user} = useContext(ProfileContext);
    const currentDate = new Date();
    const comments = [1, 2, 3];

    /**
     * <Comment
                                userId={comment.userId} 
                                date={comment.createdAt}
                                content={comment.content}
                            />
     */

    return(
        <div className="p-2">
            <div>
                <h1 className="text-2xl">
                    Comentários
                </h1>
            </div>
            {comments &&
                comments.map((comment, index) => {
                    return(
                        <div key={index}>
                            <Comment
                                productId="22"
                                userId={'false id'} 
                                date={currentDate}
                                content={'bala o produto é bom'}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}