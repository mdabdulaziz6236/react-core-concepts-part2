export default function Post  ({post}) {
    // console.log(post)
    const {userId , id , title, body } = post
return(
    <div className="card2">
        <p>Id :{id} </p>
        <p>Tittle :{title} </p>
        <h6>Body :{body} </h6>
    </div>
)
}