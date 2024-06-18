function handleClick() {
    console.log("Do something");
}

function handleMouseOver() {
    console.log("Bye!");
}

function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum in voluptatum dolore, totam at, cum explicabo nisi nesciunt voluptate beatae ducimus reiciendis facere quod repellat, asperiores officia laudantium repudiandae qui!</p>
        </div>
    );
}

export default Button;