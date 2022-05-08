
$('.numOfMembers input[type=radio][name=numOfMembers]').change(function () {
    if (this.value == 1) {
        $(".member1").show();

        $(".member2").hide();
        $(".member3").hide();
        $(".member4").hide();
        $(".member5").hide();
    }
    else if (this.value == 2) {
        $(".member1").show();
        $(".member2").show();

        $(".member3").hide();
        $(".member4").hide();
        $(".member5").hide();
    }
    else if (this.value == 3) {
        $(".member1").show();
        $(".member2").show();
        $(".member3").show();

        $(".member4").hide();
        $(".member5").hide();
    }
    else if (this.value == 4) {
        $(".member1").show();

        $(".member2").hide();
        $(".member3").hide();
        $(".member4").hide();
        $(".member5").hide();
    }
    else if (this.value == 5) {
        $(".member1").show();
        $(".member2").show();
        $(".member3").show();
        $(".member4").show();

        $(".member5").hide();
    }
});

$('.reset').click(function () {
    $('.numOfMembers input[type=radio][name=numOfMembers]').prop('checked', false);
    $(".member4").hide();
    $(".member5").hide();
});

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$('#info').validate({
    submitHandler: function (form) {
        form.submit();
    },
    rules: {
        teamContactEmail: {
            required: true,
            email: true
        },
        phoneNumber: {
            required: true,
            phoneUS: true
        },
        member1FirstName: {
            required: true
        },
        member1LastName: {
            required: true
        },
        member1Email: {
            required: true,
            email: true
        },
        member2FirstName: {
            required: true
        },
        member2LastName: {
            required: true
        },
        member2Email: {
            required: true,
            email: true
        },
        member3FirstName: {
            required: true
        },
        member3LastName: {
            required: true
        },
        member3Email: {
            required: true,
            email: true
        }
    }
});