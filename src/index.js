window.dump = function (data) {
    console.log(data);
};

window.dd = function (data) {
    console.log(data);

    throw {
        message: 'Stopped execution because dd(), use dump() if you want to proceed',
        toString: function () {
            return this.message;
        },
    };
};