function setValidator(id) {
    id.validate({
        rules: {
            input_name: "required",
            input_email: {
                required: true,
                email: true,
                email_pattern: true
            },
            input_message: "required"
        },
        messages: {
            input_name: "This field must be filled.",
            input_message: "This field must be filled.",
            input_email: {
                required: "This field must be filled.",
                email: "The email-address is incorrect.",
                email_pattern: "The email-address is incorrect."
            }
        }
    });
}

$(function () {
    $.validator.addMethod("email_pattern", function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/.test(value);
    }, "The email-address is incorrect.");
});


$(function () {
    setValidator($('#form_footer'));
    setValidator($('#form_contact'));
});



