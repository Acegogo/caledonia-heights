import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
    const baseClass = 'btn';
    const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const classes = `${baseClass} ${variantClass} ${className}`;

    if (to) {
        return <Link to={to} className={classes} {...props}>{children}</Link>;
    }

    if (props.href) {
        return <a className={classes} {...props}>{children}</a>;
    }

    return <button className={classes} {...props}>{children}</button>;
};

export default Button;
