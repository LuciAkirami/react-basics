import React from "react";

// Props is short for properties. Through props, we can pass information to the components
// Props can be passed in two ways


// function App() {
//     return (
//       <>
//         <Card 
//           username="Lucifer" 
//           email="Write"
//         />
//         <Card 
//           username="Thanos" 
//         />
//       </>
//     )
//   }

// 1. function Card(props) {
//         (
//             <h1>{props.username}<h1/>
//             <p>{props.email}<p>
//         )
// }

// 2. function Card({username, email}) { // whle destructuring the function arg names must match the actual names of the attributes with which they are passed
//         (
//             <h1>{username}<h1/>
//             <p>{email}<p>
//         )
// }

// 2. function Card({username, mail}) { // will result in an error because to the prop we are passing an attribute with name "email" not "mail"
//         (
//             <h1>{username}<h1/>
//             <p>{mail}<p>
//         )
// }

// setting default values if prop is not passed
// 2. function Card({username, email="default@mail.com"}) { // in second card, email is not passed, so we use default value
//         (
//             <h1>{username}<h1/>
//             <p>{email}<p>
//         )
// }


export default function Card({product, btnText="Read"}) {
    return (
        <div class="w-[300px] rounded-md border mb-4">
            <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                class="h-[200px] w-full rounded-md object-cover"
            />
            <div class="p-4">
                <h1 class="text-lg font-semibold">About {product}</h1>
                <p class="mt-3 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                debitis?
                </p>
                <button
                type="button"
                class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                {btnText}
                </button>
            </div>
        </div>
    )
}