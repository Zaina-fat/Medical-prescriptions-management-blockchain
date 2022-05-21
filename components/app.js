import { Plus } from "react-feather"

export const App = () => {
    return (
        <div className="app">
            <div className="top-bar">
                <div className="app-welcome">
                    <h1>Pharmancy Dashboard</h1>
                    <h3>Welcome, Annette</h3>
                </div>
                <button className="create-new">
                    <Plus/> Generate Invoice
                </button>
            </div>
            <section className="app-section">
                <div><h1>Content Here</h1></div>
                <div><h1>Content Here</h1></div>
                <div><h1>Content Here</h1></div>
            </section>
        </div>
    )
}