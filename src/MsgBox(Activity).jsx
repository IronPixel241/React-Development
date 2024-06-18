// import "./MsgBox(Activity).css"

function MsgBox({userName , textColor}) {
    let styles = {color : textColor};
    return (
        <div className="activity">
            <h1 style={styles}>Hello {userName}</h1>
        </div>
    );
}

export default MsgBox;