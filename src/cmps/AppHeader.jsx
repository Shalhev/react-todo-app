export const AppHeader = ({ toggleTheme }) => {
    return (
        <div className="app-header">
            <div className="logo">TODO</div>
            <button onClick={() => toggleTheme()}>DARK</button>
        </div>
    );
}