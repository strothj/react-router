var React = require('react');
var Link = require('react-router').Link;

var Contact = function(props) {
    return (
        <div>
            <strong>
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
}

module.exports = Contact;
