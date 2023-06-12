import "./Animal.css"
// The responsability of this componenet is to be a reusable UI element that displays an Animal's 
const Animal = () => {

    return (
        <section className="Animal"> 
            <h3>Animal name: Willow</h3>
        <p> Species: Cat</p>
        <img src="http://placekitten.com/g/200/300" alt="Willow"></img>
        </section>
    );
};

export default Animal;