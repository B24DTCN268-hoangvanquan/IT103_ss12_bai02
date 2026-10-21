let subscriptions = [
    {
        subscriptionId: "SUB-001",
        customerName: "Nguyen Van An",
        planTier: "PERSONAL",
        deviceLimit: 2
    },
    {
        subscriptionId: "SUB-002",
        customerName: "Tran Thi Mai",
        planTier: "FAMILY",
        deviceLimit: 5
    },
    {
        subscriptionId: "SUB-003",
        customerName: "Le Minh Chau",
        planTier: "PERSONAL",
        deviceLimit: 2
    }
];

// 1. Thêm thuê bao
function addSubscription() {
    let name = prompt("Nhập tên khách hàng:");

    if (name === null || name.trim() === "") {
        console.log("Tên khách hàng không hợp lệ.");
        return;
    }

    let plan = prompt("Chọn gói PERSONAL hoặc FAMILY:");

    if (plan === null) {
        console.log("Hủy thao tác.");
        return;
    }

    plan = plan.toUpperCase();

    if (plan !== "PERSONAL" && plan !== "FAMILY") {
        console.log("Gói cước không hợp lệ.");
        return;
    }

    let number = subscriptions.length + 1;
    let id = "SUB-" + String(number).padStart(3, "0");

    let device = 2;

    if (plan === "FAMILY") {
        device = 5;
    }

    let newSubscription = {
        subscriptionId: id,
        customerName: name.trim(),
        planTier: plan,
        deviceLimit: device
    };

    subscriptions.push(newSubscription);

    console.log("Thêm thuê bao thành công.");
}

// 2. Hiển thị danh sách
function listSubscriptions() {
    if (subscriptions.length === 0) {
        console.log("Danh sách thuê bao trống.");
        return;
    }

    console.log("==============================================================");
    console.log("                    DANH SÁCH THUÊ BAO");
    console.log("==============================================================");
    console.log("STT | Mã thuê bao | Tên khách hàng       | Gói       | Thiết bị");
    console.log("--------------------------------------------------------------");

    for (let i = 0; i < subscriptions.length; i++) {
        let sub = subscriptions[i];

        console.log(
            `${i + 1}   | ${sub.subscriptionId}     | ${sub.customerName.padEnd(20)} | ${sub.planTier.padEnd(9)} | ${sub.deviceLimit}`
        );
    }

    console.log("==============================================================");
}

// 3. Cập nhật gói
function updateSubscription() {
    let id = prompt("Nhập mã thuê bao muốn cập nhật:");

    if (id === null) {
        console.log("Hủy thao tác.");
        return;
    }

    id = id.toUpperCase().trim();

    let index = -1;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Không tìm thấy thuê bao.");
        return;
    }

    let plan = prompt("Nhập gói mới PERSONAL hoặc FAMILY:");

    if (plan === null) {
        console.log("Hủy thao tác.");
        return;
    }

    plan = plan.toUpperCase();

    if (plan !== "PERSONAL" && plan !== "FAMILY") {
        console.log("Gói cước không hợp lệ.");
        return;
    }

    subscriptions[index].planTier = plan;

    if (plan === "PERSONAL") {
        subscriptions[index].deviceLimit = 2;
    } else {
        subscriptions[index].deviceLimit = 5;
    }

    console.log("Cập nhật thuê bao thành công.");
}

// 4. Hủy thuê bao
function deleteSubscription() {
    let id = prompt("Nhập mã thuê bao muốn hủy:");

    if (id === null) {
        console.log("Hủy thao tác.");
        return;
    }

    id = id.toUpperCase().trim();

    let index = -1;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Không tìm thấy thuê bao.");
        return;
    }

    let answer = prompt("Bạn có chắc muốn hủy thuê bao này? (Y/N)");

    if (answer === null) {
        console.log("Hủy thao tác.");
        return;
    }

    if (answer.toUpperCase() === "Y") {
        subscriptions.splice(index, 1);
        console.log("Hủy thuê bao thành công.");
    } else {
        console.log("Đã hủy thao tác.");
    }
}

// Chương trình chính
function startApp() {
    let choice = "";

    do {
        choice = prompt(
            `===== RIKKEISTREAM =====
1. Thêm thuê bao mới
2. Xem danh sách thuê bao
3. Cập nhật gói cước
4. Hủy thuê bao
5. Thoát

Nhập lựa chọn:`
        );

        if (choice === null) {
            console.log("Chương trình kết thúc.");
            break;
        }

        switch (choice) {
            case "1":
                addSubscription();
                break;

            case "2":
                listSubscriptions();
                break;

            case "3":
                updateSubscription();
                break;

            case "4":
                deleteSubscription();
                break;

            case "5":
                console.log("Thoát chương trình.");
                break;

            default:
                alert("Lựa chọn không hợp lệ.");
        }

    } while (choice !== "5");
}

startApp();