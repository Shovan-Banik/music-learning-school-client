import useCart from "../../../hooks/useCart";

const SelectedClasses = () => {
    const[cart]=useCart();
    return (
        <div>
            <h2>class selected :{cart.length}</h2>
        </div>
    );
};

export default SelectedClasses;