export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`form-text ` + className}>
            {value ? value : children}
        </label>
    );
}
