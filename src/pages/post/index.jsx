import { useParams } from "react-router-dom";
import PostItem from "../dashboard/components/PostItem";
import { useContext, useState } from "react";   
import { DataContext } from "../../App";

export default function Post(){

    const { posts } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(p => p.id == id)


    return (<div className="main-container">{
        <PostItem post={post} index={id}/>
    }
        
    </div>)
}