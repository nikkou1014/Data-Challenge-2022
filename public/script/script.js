function get_rules(num) {
    let rules = {
        teamContactEmail: {
            required: true,
            email: true
        },
        phoneNumber: {
            required: true,
            phoneUS: true
        }
    }

    for (let i = 1; i <= num; i++) {
        rules['member' + i.toString() + 'FirstName'] = {
            required: true
        };

        rules['member' + i.toString() + 'LastName'] = {
            required: true
        };

        rules['member' + i.toString() + 'Email'] = {
            required: true,
            email: true
        }
    }

    return rules;
}

$(function onload() {

    $('.numOfMembers input[type=radio][name=numOfMembers]').change(function () {
        let num = parseInt(this.value, 10);

        for (let i = 1; i <= num; i++) {
            $("#member_box" + i.toString()).show();
        }

        for (let i = num + 1; i <= 5; i++) {
            $("#member_box" + i.toString()).hide();
        }

        $('#info').validate({
            submitHandler: function (form) {
                form.submit();
            },
            rules: get_rules(this.value)
        });
    });

    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $('#info').validate({
        submitHandler: function (form) {
            form.submit();
        },
        rules: get_rules(3)
    });

    $('.reset').click(function () {
        $('.numOfMembers input[type=radio][name=numOfMembers]').prop('checked', false);
        $(".member4").hide();
        $(".member5").hide();
    });

    $('#3Members').click();
});