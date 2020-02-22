function checkTri() {
    let edge1 = +prompt("Nhập vào độ dài cạnh a", "cm");
    let edge2 = +prompt("Nhập vào độ dài cạnh b", "cm");
    let edge3 = +prompt("Nhập vào độ dài cạnh c", "cm");
    if (edge1 < 0 && edge2 < 0 && edge3 < 0) {
        alert(" Đây không phải là tam giác");
    } else {
        let isTriangle1 = ((edge1 + edge2) > edge3);
        let isTriangle2 = ((edge1 + edge3) > edge2);
        let isTriangle3 = ((edge2 + edge3) > edge1);
        if (isTriangle1 && isTriangle2 && isTriangle3) {
            alert("Đây là một tam giác");
        } else {
            alert("Đây không phải là tam giác");
        }
    }
}