function Strike({ strikeType, currentPlayer }) {
    const bgColour = currentPlayer === 'X' ? 'darkorange' : 'lightskyblue';
    const style = {
        backgroundColor: bgColour
    };
    return (
        <div className={`strike ${strikeType}`} style={style}></div>
    );
}

export default Strike;
