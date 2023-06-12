import useAuth from "../hooks/useAuth";

const ThemeProvider = ({ children }) => {
    const { theme } = useAuth();
    return (
        <div data-theme={`${theme ? 'light' : 'dark'}`}>
            {children}
        </div>
    );
};

export default ThemeProvider;