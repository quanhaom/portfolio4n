import { useState } from "react";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const projects = [
    "Bài tập 1: Thao tác cơ bản với tệp tin và thư mục",
    "Bài tập 2: Tìm kiếm và đánh giá thông tin học thuật",
    "Bài tập 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    "Bài tập 4: Công cụ hợp tác trực tuyến trong dự án nhóm",
    "Bài tập 5: AI tạo sinh hỗ trợ sáng tạo nội dung",
    "Bài tập 6: AI có trách nhiệm trong học tập và nghiên cứu"
  ];

  const cardPreview = [
    [" Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux).",],
    ["Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",],
    ["Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.",],
    ["Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.",],
    ["Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.",],
    ["Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.",]
  ];

const popupContent = [
  [
    {
      type: "text",
      value: `I. Mục tiêu: Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows.

II. Yêu cầu thực hiện:

1. Mở File Explorer: Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.

2. Truy cập ổ đĩa/thư mục: Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống.

3. Tạo thư mục mới: Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien.`
    },


    {
      type: "text",
      value: `4. Vào thư mục vừa tạo: Nhấp đúp vào thư mục ThucHanh_NguyenVanA.

5. Tạo tệp tin văn bản: Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt.

6. Đổi tên tệp tin: Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt.`
    },

    {
      type: "text",
      value: `7. Tạo thư mục con: Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.

8. Sao chép tệp tin: Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy, sau đó vào thư mục TaiLieu và chọn Paste.

9. Di chuyển tệp tin: Tạo tệp DiChuyen.txt, chọn Cut, sau đó Paste vào thư mục TaiLieu.`
    },

    {
      type: "image",
      src: "/a.png",
      caption: "Mở file, truy cập vào file/ thư mục."
    },

    {
      type: "text",
      value: `10. Xóa tệp tin: Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete.

11. Xóa vĩnh viễn: Chọn tệp DiChuyen.txt, nhấn Shift + Delete.

12. Khôi phục từ Thùng rác: Mở Recycle Bin, tìm tệp đã xóa, nhấp chuột phải và chọn Restore.`
    }
  ],

[
  {
    type: "text",
    value: `

Thông tin bài tập

I. Mục tiêu:

Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.

II. Yêu cầu:

1. Chọn một chủ đề liên quan đến ngành học của bạn.

2. Thực hiện tìm kiếm thông tin từ các nguồn sau:

- Cơ sở dữ liệu học thuật như Google Scholar, Microsoft Academic hoặc cơ sở dữ liệu của thư viện trường
- Tạp chí khoa học chuyên ngành
- Sách chuyên khảo
- Các nguồn mở trên internet

3. Thu thập ít nhất 10 tài liệu tham khảo liên quan đến chủ đề, bao gồm ít nhất 5 bài báo khoa học.

4. Đánh giá độ tin cậy của mỗi nguồn thông tin dựa trên các tiêu chí:

- Tác giả
- Cơ quan xuất bản
- Phương pháp nghiên cứu
- Trích dẫn
- Tính cập nhật

5. Tạo bảng tổng hợp các nguồn thông tin với đánh giá và xếp hạng độ tin cậy.

III. Kết quả đạt được:

Sau bài tập này, tôi biết cách tìm kiếm thông tin học thuật từ nhiều nguồn khác nhau, đặc biệt là các nguồn đáng tin cậy như Google Scholar, tạp chí khoa học và cơ sở dữ liệu thư viện.

Bài tập cũng giúp tôi hiểu rằng không phải mọi thông tin trên internet đều có giá trị học thuật như nhau. Khi sử dụng tài liệu, cần xem xét tác giả, nơi xuất bản, năm công bố, phương pháp nghiên cứu và mức độ liên quan đến chủ đề.

Thông qua việc lập bảng tổng hợp và đánh giá nguồn, tôi rèn luyện được kỹ năng chọn lọc thông tin, tư duy phản biện và sử dụng tài liệu tham khảo có trách nhiệm trong học tập.`
  }
],

[
  {
    type: "text",
    value: `
Thông tin bài tập

I. Mục tiêu:

Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.

II. Yêu cầu:

1. Chọn 3 tác vụ học tập phổ biến:

- Tóm tắt một bài đọc hoặc tài liệu học thuật
- Giải thích một khái niệm phức tạp
- Tạo bộ câu hỏi ôn tập cho một chủ đề

2. Cho mỗi tác vụ, viết 3 phiên bản prompt khác nhau:

- Prompt cơ bản: đơn giản, ngắn gọn
- Prompt cải tiến: chi tiết hơn, có cấu trúc
- Prompt nâng cao: áp dụng các kỹ thuật prompt engineering như role prompting, chain-of-thought hoặc few-shot examples

3. Thử nghiệm các prompt với một công cụ AI như ChatGPT và so sánh kết quả.

4. Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.

5. Tổng hợp các nguyên tắc và mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm.

III. Kết quả đạt được:

Sau bài tập này, tôi hiểu rằng prompt càng rõ ràng, cụ thể và có bối cảnh thì kết quả AI trả về càng phù hợp với yêu cầu học tập.

Bài tập giúp tôi biết cách xây dựng prompt theo cấu trúc gồm vai trò, bối cảnh, nhiệm vụ và định dạng đầu ra. Thay vì chỉ đặt câu hỏi ngắn, tôi học được cách hướng dẫn AI chi tiết hơn để nhận được câu trả lời có tổ chức và dễ sử dụng.

Thông qua việc so sánh các phiên bản prompt, tôi nhận ra rằng prompt nâng cao thường cho kết quả tốt hơn vì nó cung cấp mục tiêu rõ ràng, yêu cầu cụ thể và tiêu chí đầu ra. Tuy nhiên, người dùng vẫn cần đọc lại, kiểm tra và chỉnh sửa kết quả để phù hợp với mục đích học tập.

Từ bài tập này, tôi rút ra một số nguyên tắc khi viết prompt: xác định rõ vai trò của AI, cung cấp đủ bối cảnh, nêu nhiệm vụ cụ thể, yêu cầu định dạng đầu ra rõ ràng và luôn kiểm tra lại thông tin do AI tạo ra.`
  }
],

[
  {
    type: "text",
    value: `

Thông tin bài tập

I. Mục tiêu:

Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.

II. Yêu cầu:

1. Bối cảnh:

Làm việc cùng nhóm để thực hiện một dự án nhỏ. Tuy nhiên, bài nộp này sẽ tập trung vào vai trò và trải nghiệm cá nhân của tôi trong quá trình thực hiện dự án.

2. Lựa chọn công cụ:

Cá nhân phải tham gia thiết lập hoặc sử dụng ít nhất 3 công cụ hợp tác trực tuyến thuộc các nhóm sau:

- Công cụ quản lý dự án như Trello, Asana, ClickUp hoặc Microsoft Planner
- Công cụ soạn thảo tài liệu cộng tác như Google Docs hoặc Microsoft Office Online
- Công cụ lưu trữ và chia sẻ tệp như Google Drive, OneDrive hoặc Dropbox
- Công cụ giao tiếp nhóm như Slack, Discord hoặc Microsoft Teams

3. Thực hiện nhiệm vụ cá nhân:

Trong 1 tuần thực hiện dự án, cá nhân phải minh chứng được các hoạt động sau:

- Tự quản lý danh sách nhiệm vụ được giao trên công cụ quản lý dự án
- Có lịch sử chỉnh sửa và đóng góp nội dung trực tiếp trên tài liệu cộng tác
- Tương tác, thảo luận chủ động với các thành viên khác trên công cụ giao tiếp nhóm
- Tổ chức và lưu trữ các tệp tin cá nhân phụ trách một cách khoa học

4. Nhật ký minh chứng:

Ghi lại quá trình cá nhân sử dụng các công cụ hợp tác trực tuyến. Nhật ký cần bao gồm ảnh chụp màn hình thể hiện rõ tên tài khoản hoặc phần đóng góp của cá nhân trong quá trình làm việc nhóm.

III. Kết quả đạt được:

Sau bài tập này, tôi hiểu rõ hơn vai trò của các công cụ hợp tác trực tuyến trong việc tổ chức và điều phối dự án nhóm.

Bài tập giúp tôi biết cách sử dụng công cụ quản lý dự án để theo dõi nhiệm vụ cá nhân, sử dụng tài liệu cộng tác để đóng góp nội dung, dùng nền tảng giao tiếp nhóm để trao đổi thông tin và lưu trữ tài liệu một cách khoa học.

Thông qua quá trình thực hiện, tôi rèn luyện được kỹ năng tự quản lý công việc, chủ động giao tiếp, phối hợp với thành viên khác và chịu trách nhiệm với phần việc được giao.

Bên cạnh đó, việc ghi lại nhật ký minh chứng giúp tôi nhìn lại quá trình làm việc của bản thân, đánh giá mức độ đóng góp cá nhân và nhận ra tầm quan trọng của sự rõ ràng, minh bạch trong dự án nhóm.`
  }
],

[
  {
    type: "text",
    value: `

Thông tin bài tập

I. Mục tiêu:

Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.

II. Yêu cầu:

1. Chọn một dự án sáng tạo nội dung.

Dự án có thể là bài thuyết trình, bài viết, infographic hoặc video ngắn.

2. Sử dụng ít nhất 3 công cụ AI tạo sinh khác nhau để hỗ trợ quá trình sáng tạo:

- Công cụ AI tạo văn bản như ChatGPT, Google Gemini hoặc Claude
- Công cụ AI tạo hình ảnh như DALL-E, Midjourney hoặc Stable Diffusion
- Công cụ AI hỗ trợ thiết kế như Canva AI hoặc Adobe Firefly

3. Ghi lại chi tiết quá trình sử dụng AI:

- Các prompt đã sử dụng và kết quả nhận được
- Cách tôi chỉnh sửa và tích hợp đầu ra của AI
- So sánh kết quả từ các công cụ AI khác nhau

4. Hoàn thiện dự án bằng cách kết hợp đầu ra của AI với đóng góp sáng tạo của riêng mình.

5. Viết phân tích về vai trò của AI trong quá trình sáng tạo, bao gồm:

- Những phần AI làm tốt và những phần còn hạn chế
- Cách AI thay đổi quy trình sáng tạo của tôi
- Các vấn đề đạo đức cần cân nhắc

III. Kết quả đạt được:

Sau bài tập này, tôi hiểu rõ hơn cách sử dụng AI tạo sinh như một công cụ hỗ trợ trong quá trình sáng tạo nội dung số.

Bài tập giúp tôi biết cách lựa chọn công cụ AI phù hợp với từng nhiệm vụ, chẳng hạn dùng AI tạo văn bản để lên ý tưởng và viết nội dung, dùng AI tạo hình ảnh để minh họa, và dùng công cụ thiết kế AI để hoàn thiện sản phẩm trực quan.

Thông qua quá trình thử nghiệm, tôi nhận ra rằng AI có thể giúp tiết kiệm thời gian, gợi ý nhiều ý tưởng mới và hỗ trợ cải thiện chất lượng sản phẩm. Tuy nhiên, kết quả từ AI không nên được sử dụng một cách máy móc. Người dùng vẫn cần chỉnh sửa, kiểm tra thông tin và bổ sung dấu ấn cá nhân để sản phẩm trở nên phù hợp và sáng tạo hơn.

Bài tập cũng giúp tôi nhận thức được các vấn đề đạo đức khi sử dụng AI, như bản quyền hình ảnh, tính minh bạch trong việc sử dụng công cụ AI, nguy cơ phụ thuộc quá mức vào công nghệ và trách nhiệm kiểm soát nội dung trước khi công bố.`
  }
],


[
  {
    type: "text",
    value: `

Thông tin bài tập

I. Mục tiêu:

Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.

II. Yêu cầu:

1. Nghiên cứu chính sách của trường đại học của bạn hoặc một trường đại học lớn ở Việt Nam về việc sử dụng AI trong học tập và nghiên cứu.

2. Chọn một nhiệm vụ học tập như viết bài luận, chuẩn bị thuyết trình hoặc tổng hợp tài liệu và thực hiện với sự hỗ trợ của AI.

Trong quá trình đó cần:

- Ghi lại các prompt đã sử dụng
- Ghi lại đầu ra của AI
- Mô tả cách tôi đánh giá, chỉnh sửa và tích hợp đầu ra của AI
- Trích dẫn việc sử dụng AI một cách minh bạch

3. Phân tích các vấn đề đạo đức liên quan đến việc sử dụng AI trong học thuật, bao gồm:

- Ranh giới giữa hỗ trợ hợp lý và gian lận học thuật
- Vấn đề về quyền sở hữu trí tuệ và trích dẫn
- Tác động đến quá trình học tập và phát triển kỹ năng

4. Xây dựng bộ nguyên tắc cá nhân gồm từ 5 đến 7 nguyên tắc về cách sử dụng AI có trách nhiệm trong học tập.

5. Tạo một infographic minh họa với chủ đề “Sử dụng AI có trách nhiệm trong học thuật”.

III. Kết quả đạt được:

Sau bài tập này, tôi hiểu rõ hơn rằng AI không chỉ là một công cụ hỗ trợ học tập mà còn là một công nghệ cần được sử dụng một cách minh bạch, có trách nhiệm và đúng giới hạn.

Bài tập giúp tôi nhận thức rõ sự khác biệt giữa việc dùng AI để hỗ trợ quá trình học và việc lạm dụng AI dẫn đến gian lận học thuật. Tôi hiểu rằng người học cần chủ động kiểm tra, đánh giá và chỉnh sửa nội dung do AI tạo ra, thay vì phụ thuộc hoàn toàn vào công cụ.

Thông qua việc tìm hiểu chính sách của trường và phân tích các vấn đề đạo đức, tôi rèn luyện được ý thức về trích dẫn, quyền sở hữu trí tuệ, tính trung thực trong học thuật và trách nhiệm cá nhân khi sử dụng công nghệ.

Việc xây dựng bộ nguyên tắc cá nhân cũng giúp tôi xác định rõ cách mình sẽ sử dụng AI trong tương lai: dùng AI để hỗ trợ tư duy, mở rộng ý tưởng và nâng cao hiệu quả học tập, nhưng luôn giữ vai trò chủ động, phản biện và trung thực trong mọi sản phẩm học thuật.`
  }
]


];

  const popupImages = [
    ["/images/bai1-1.png", "/images/bai1-2.png", "/images/bai1-3.png"],
    ["/images/bai2-1.png", "/images/bai2-2.png", "/images/bai2-3.png"],
    ["/images/bai3-1.png", "/images/bai3-2.png", "/images/bai3-3.png"],
    ["/images/bai4-1.png", "/images/bai4-2.png", "/images/bai4-3.png"],
    ["/images/bai5-1.png", "/images/bai5-2.png", "/images/bai5-3.png"],
    ["/images/bai6-1.png", "/images/bai6-2.png", "/images/bai6-3.png"]
  ];

  const colors = [
    "#6366f1",
    "#06b6d4",
    "#22c55e",
    "#f97316",
    "#ec4899",
    "#8b5cf6"
  ];

  const openPopup = (i) => {
    setSelectedIndex(i);
    setImgIndex(0);
  };

  const nextImg = () => {
    setImgIndex((p) =>
      p < popupImages[selectedIndex].length - 1 ? p + 1 : 0
    );
  };

  const prevImg = () => {
    setImgIndex((p) =>
      p > 0 ? p - 1 : popupImages[selectedIndex].length - 1
    );
  };

  return (
    <section
      id="projects"
      style={{
        padding: "64px 20px 72px",
        background: "transparent",
        boxSizing: "border-box"
      }}
    >
      {/* HEADER PAGE */}
      <div style={{ textAlign: "center", margin: "0 0 30px" }}>
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "800",
            margin: "0 0 8px",
            background: "linear-gradient(90deg,#6366f1,#ec4899,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Bài học
        </h1>

        <p
          style={{
            color: "#666",
            margin: 0,
            fontSize: "15px"
          }}
        >
          Tổng hợp bài tập ứng dụng AI trong học tập
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "1120px",
          margin: "0 auto"
        }}
      >
        {projects.map((title, i) => (
          <div
            key={i}
            onClick={() => openPopup(i)}
            style={{
              background: "rgba(255,255,255,0.85)",
              borderRadius: "20px",
              cursor: "pointer",
              minHeight: "235px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.75)",
              transition: "0.3s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                background: colors[i],
                color: "#fff",
                padding: "14px",
                fontWeight: "700",
                lineHeight: "1.45"
              }}
            >
              {title}
            </div>

            <div style={{ padding: "16px 18px" }}>
              <ul
                style={{
                  paddingLeft: "18px",
                  color: "#444",
                  margin: 0,
                  lineHeight: "1.8",
                  fontSize: "14px"
                }}
              >
                {cardPreview[i].map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "85vw",
              height: "85vh",
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              overflowY: "auto",
              position: "relative"
            }}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: 15,
                right: 15,
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                background: "#111",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            <h1
              style={{
                fontSize: "26px",
                fontWeight: "800",
                paddingRight: "45px",
                background: "linear-gradient(90deg,#6366f1,#ec4899,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {projects[selectedIndex]}
            </h1>

            <div style={{ marginTop: "20px" }}>
  {popupContent[selectedIndex].map((block, index) => {
    if (block.type === "text") {
      return (
        <pre
          key={index}
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "15px",
            color: "#333",
            lineHeight: "1.75",
            fontFamily: '"Be Vietnam Pro", "Segoe UI", Arial, sans-serif',
            marginBottom: "22px"
          }}
        >
          {block.value}
        </pre>
      );
    }

    if (block.type === "image") {
      return (
        <div
          key={index}
          style={{
            margin: "22px 0",
            textAlign: "center"
          }}
        >
          <img
            src={block.src}
            alt={block.caption}
            style={{
              width: "100%",
              maxWidth: "720px",
              borderRadius: "16px",
              boxShadow: "0 14px 35px rgba(0,0,0,0.16)",
              border: "1px solid rgba(0,0,0,0.08)"
            }}
          />

          <p
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "#64748b",
              fontStyle: "italic"
            }}
          >
            {block.caption}
          </p>
        </div>
      );
    }

    return null;
  })}
</div>

            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <h4>Hình minh hoạ</h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  marginTop: "12px"
                }}
              >
                <button onClick={prevImg}>⬅</button>

                <div
                  style={{
                    width: "220px",
                    height: "125px",
                    border: "1px dashed #ccc",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#888"
                  }}
                >
                  {popupImages[selectedIndex][imgIndex]}
                </div>

                <button onClick={nextImg}>➡</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}