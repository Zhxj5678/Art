(function() {
    function initBoyaFudao() {
        // 1. 导航栏插入原生白字“论文辅导”（保持三道杠不变，与原有文字完美齐平）
        var $checkSystem = $("#select_check_system").length ? $("#select_check_system") : $("a:contains('查重系统')");
        if ($checkSystem.length && $("#nav-fudao-btn").length === 0) {
            $checkSystem.parent().after(
                '<li id="nav-fudao-btn"><a class="pull-right-a" href="javascript:void(0);" onclick="openBoyaFudaoModal()" style="cursor:pointer;">论文辅导</a></li>'
            );
        }

        // 2. 构建原生自包含弹窗
        if ($("#boya-fudao-modal-mask").length === 0) {
            var modalHtml = '<div id="boya-fudao-modal-mask" onclick="closeBoyaFudaoModal(event)" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.65);z-index:999999;align-items:center;justify-content:center;backdrop-filter:blur(3px);padding:15px;box-sizing:border-box;">' +
                '<div id="boya-fudao-modal-content" onclick="event.stopPropagation()" style="background:#ffffff;border-radius:16px;max-width:680px;width:100%;max-height:90vh;overflow-y:auto;padding:25px 20px 20px 20px;position:relative;box-shadow:0 20px 50px rgba(0,0,0,0.3);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,\'Microsoft YaHei\',sans-serif;text-align:center;">' +
                    '<span onclick="closeBoyaFudaoModal()" style="position:absolute;top:12px;right:16px;font-size:24px;color:#94a3b8;cursor:pointer;line-height:1;font-weight:bold;padding:5px;">&times;</span>' +
                    '<h2 style="font-size:24px;font-weight:800;color:#1e293b;margin:0 0 10px 0;line-height:1.3;">论文辅导全流程服务</h2>' +
                    '<div style="font-size:13px;color:#475569;line-height:1.6;background:#f8fafc;border-left:4px solid #3b82f6;padding:8px 12px;text-align:left;border-radius:0 6px 6px 0;margin-bottom:10px;">' +
                        '<strong>导读：</strong>论文辅导、免费论文选题、免费写开题报告、论文修改、人工降重、免费答辩指导等全流程一条龙服务' +
                    '</div>' +
                    '<div style="font-size:13px;color:#1e293b;font-weight:600;text-align:left;padding:0 4px;margin-bottom:12px;">' +
                        '另有业务：实习三方打卡、核心期刊课题学报发表、创新创业加学分、专利软著申请。' +
                    '</div>' +
                    '<div style="margin:8px 0 16px 0;">' +
                        '<span style="background:#fee2e2;color:#b91c1c;font-weight:700;font-size:14px;padding:4px 14px;border-radius:20px;display:inline-block;">🛡️ 郑重承诺：不通过三倍退款！</span>' +
                    '</div>' +
                    '<div style="display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin:15px 0;">' +
                        '<div style="background:#0284c7;border-radius:12px;padding:16px 14px 12px 14px;width:230px;max-width:100%;box-sizing:border-box;color:#fff;">' +
                            '<div style="font-size:16px;font-weight:bold;margin-bottom:10px;">请加我的企业微信</div>' +
                            '<div style="background:#fff;border-radius:8px;padding:8px;display:inline-block;"><img src="https://fastly.jsdelivr.net/gh/Zhxj5678/Art@main/images/qy_qrcode.jpg" onerror="this.src=\'https://iili.io/nGgB1BS.jpg\'" style="width:180px;height:180px;display:block;border-radius:4px;object-fit:contain;"></div>' +
                            '<div style="font-size:12px;margin-top:10px;font-weight:500;">📱 手机长按二维码添加</div>' +
                        '</div>' +
                        '<div style="background:#ffffff;border:2px solid #e2e8f0;border-radius:12px;padding:16px 14px 12px 14px;width:230px;max-width:100%;box-sizing:border-box;color:#1e293b;box-shadow:0 4px 12px rgba(0,0,0,0.05);">' +
                            '<div style="font-size:16px;font-weight:bold;margin-bottom:10px;color:#1e293b;">请加老师微信</div>' +
                            '<div style="background:#fff;border-radius:8px;padding:8px;display:inline-block;"><img src="https://fastly.jsdelivr.net/gh/Zhxj5678/Art@main/images/wx_qrcode.jpg" onerror="this.src=\'https://iili.io/nGgCkNf.jpg\'" style="width:180px;height:180px;display:block;border-radius:4px;object-fit:contain;"></div>' +
                            '<div style="font-size:12px;margin-top:10px;color:#64748b;font-weight:500;">📱 手机长按二维码添加</div>' +
                        '</div>' +
                    '</div>' +
                    '<div style="margin-top:18px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">' +
                        '<button onclick="copyBoyaPhone()" style="background:#059669;color:#fff;border:none;padding:10px 22px;border-radius:30px;font-size:15px;font-weight:bold;cursor:pointer;box-shadow:0 4px 12px rgba(5,150,105,0.3);">📋 复制微信号 (15188382476)</button>' +
                        '<a href="tel:15188382476" style="background:#2563eb;color:#fff;text-decoration:none;padding:10px 20px;border-radius:30px;font-size:15px;font-weight:bold;display:inline-block;box-shadow:0 4px 12px rgba(37,99,235,0.25);">📞 拨打电话</a>' +
                    '</div>' +
                '</div>' +
            '</div>';
            $("body").append(modalHtml);
        }
    }

    if (window.jQuery) {
        $(initBoyaFudao);
    } else {
        window.addEventListener('DOMContentLoaded', initBoyaFudao);
    }
})();

window.openBoyaFudaoModal = function() {
    if (window.jQuery) {
        $("#boya-fudao-modal-mask").css("display", "flex").hide().fadeIn(200);
    } else {
        var el = document.getElementById("boya-fudao-modal-mask");
        if (el) el.style.display = "flex";
    }
};

window.closeBoyaFudaoModal = function(e) {
    if (window.jQuery) {
        $("#boya-fudao-modal-mask").fadeOut(200);
    } else {
        var el = document.getElementById("boya-fudao-modal-mask");
        if (el) el.style.display = "none";
    }
};

window.copyBoyaPhone = function() {
    var phone = "15188382476";
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(phone).then(function() {
            alert("已成功复制微信号/手机号：15188382476\n请打开微信添加好友！");
        }).catch(function() {
            fallbackCopyPhone(phone);
        });
    } else {
        fallbackCopyPhone(phone);
    }
};

function fallbackCopyPhone(text) {
    var input = document.createElement("input");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("已成功复制微信号/手机号：15188382476\n请打开微信添加好友！");
}
