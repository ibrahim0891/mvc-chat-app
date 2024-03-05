/* eslint-disable react/prop-types */



const Loader = ({ state, loaderMessage }) => {
    return (
        <div>
            {state ? <h2>{loaderMessage}</h2> : null}
        </div>
    )
}


export default Loader