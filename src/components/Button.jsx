import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', type, ...props }) => {
  const variantClass =
    variant === 'primary' ? 'btn-primary' :
      variant === 'green' ? 'btn-green' :
        variant === 'outline' ? 'btn-outline' :
          'btn-secondary';
  const classes = `btn ${variantClass} ${className}`.trim();

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }

  if (props.href) {
    return <a className={classes} {...props}>{children}</a>;
  }

  return <button type={type || 'button'} className={classes} {...props}>{children}</button>;
};

export default Button;
