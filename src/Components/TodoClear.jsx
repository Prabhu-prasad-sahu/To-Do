export const ToDoClear = ({ onClearButton }) => {
    return (
        <section>
            <button className="clear-btn" onClick={onClearButton}>ClearAll</button>
        </section>
    );
};