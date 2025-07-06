import "./PersonalPage.css"

function PersonalPage({Name, SurName, FarName, Email, Phone}) {
    return(
        <>
            <div className="personal-page">
                <h2>Личная информация</h2>

                <div className="info-row">
                    <span className="label">ФИО:</span>
                    <span className="value">{SurName} {Name} {FarName}</span>
                </div>

                <div className="info-row">
                    <span className="label">Email:</span>
                    <span className="value">{Email}</span>
                </div>

                <div className="info-row">
                    <span className="label">Телефон:</span>
                    <span className="value">{Phone}</span>
                </div>
            </div>

        </>
    )
}

export default PersonalPage;