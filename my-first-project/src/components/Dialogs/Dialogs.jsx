import React from 'react';

const Dialogs = (props) => {

    return(
        <div className="Dialogs">
            <div className="DialogsItems">
                <div className="Dialog">
                    Andrey
                </div>
                <div className="Dialog">
                    Sveta
                </div>
                <div className="Dialog">
                    Sasha
                </div>
                <div className="Dialog">
                    Viktor
                </div>
                <div className="Dialog">
                    Yulia
                </div>


            </div>
            <div className="Messages">
                <div className="Message">
                    Hi, how are you?
                </div>
                <div className="Message">
                    I'm fine
                </div>
                <div className="Message">
                    What are you doing?
                </div>
                <div className="Message">
                    I'm learning React
                </div>


            </div>

        </div>
    )
}
export default Dialogs;