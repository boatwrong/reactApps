function Reminder(title) {
    return (
        <div className="card">
            <h2> {title.text} </h2>
            <div className="actions">
               <button>
                    delete
                </button> 
            </div>
        </div>
    );
} 

export default Reminder;
