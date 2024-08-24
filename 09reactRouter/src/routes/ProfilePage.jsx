import { useParams } from "react-router-dom";

export default function ProfilePage() {
    let params = useParams()

    return (
        <div className="flex">
            <h1>This is Profile Page {params.profileid}</h1>
        </div>
    )
}