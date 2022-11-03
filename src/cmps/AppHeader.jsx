export const AppHeader = ({ toggleTheme }) => {
    return (
        <div className="app-header flex space-between align-center">
            <div className="logo">TODO</div>
            <button className="theme-btn" onClick={() => toggleTheme()}></button>
        </div>
    );
}