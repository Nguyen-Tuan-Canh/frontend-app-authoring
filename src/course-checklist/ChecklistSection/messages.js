import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  welcomeMessageShortDescription: {
    id: 'welcomeMessageShortDescription',
    defaultMessage: 'Thêm thông điệp chào mừng',
    description: 'Nhãn cho phần mô tả thông điệp chào mừng của khóa học',
  },
  welcomeMessageLongDescription: {
    id: 'welcomeMessageLongDescription',
    defaultMessage: 'Gửi lời chào cá nhân đến học viên và chuẩn bị cho họ một trải nghiệm học tập tích cực trong khóa học.',
    description: 'Mô tả cho phần gợi ý người dùng nhập thông điệp chào mừng cho khóa học',
  },
  gradingPolicyShortDescription: {
    id: 'gradingPolicyShortDescription',
    defaultMessage: 'Tạo chính sách chấm điểm cho khóa học',
    description: 'Nhãn cho phần mô tả chính sách chấm điểm của khóa học',
  },
  gradingPolicyLongDescription: {
    id: 'gradingPolicyLongDescription',
    defaultMessage: 'Thiết lập chính sách chấm điểm, bao gồm các loại bài tập và điểm đạt yêu cầu. Tổng điểm của tất cả bài tập phải bằng 100%.',
    description: 'Mô tả cho phần gợi ý người dùng thiết lập chính sách chấm điểm cho khóa học',
  },
  gradingPolicyComment: {
    id: 'gradingPolicyComment',
    defaultMessage: 'Chính sách chấm điểm hiện tại của bạn đang cộng được {percent}%.',
    description: 'Mô tả cho phần hiển thị tổng phần trăm trong chính sách chấm điểm của khóa học',
  },
  certificateShortDescription: {
    id: 'certificateShortDescription',
    defaultMessage: 'Bật chứng chỉ của khóa học',
    description: 'Nhãn cho phần mô tả chứng chỉ hoàn thành khóa học',
  },
  certificateLongDescription: {
    id: 'certificateLongDescription',
    defaultMessage: 'Đảm bảo tất cả nội dung văn bản chính xác, chữ ký đã được tải lên và chứng chỉ đã được kích hoạt.',
    description: 'Mô tả cho phần gợi ý người dùng cấu hình chứng chỉ hoàn thành khóa học',
  },
  courseDatesShortDescription: {
    id: 'courseDatesShortDescription',
    defaultMessage: 'Thiết lập các mốc thời gian quan trọng của khóa học',
    description: 'Nhãn cho phần mô tả các mốc thời gian quan trọng của khóa học',
  },
  courseDatesLongDescription: {
    id: 'courseDatesLongDescription',
    defaultMessage: 'Thiết lập lịch trình khóa học, bao gồm ngày bắt đầu và ngày kết thúc.',
    description: 'Mô tả cho phần gợi ý người dùng thiết lập lịch trình khóa học',
  },
  assignmentDeadlinesShortDescription: {
    id: 'assignmentDeadlinesShortDescription',
    defaultMessage: 'Kiểm tra hạn nộp bài tập',
    description: 'Nhãn cho phần mô tả hạn nộp bài tập của khóa học',
  },
  assignmentDeadlinesLongDescription: {
    id: 'assignmentDeadlinesLongDescription',
    defaultMessage: 'Đảm bảo tất cả hạn nộp bài tập đều nằm trong khoảng từ ngày bắt đầu đến ngày kết thúc khóa học.',
    description: 'Mô tả cho phần gợi ý người dùng thiết lập hạn nộp bài tập cho khóa học',
  },
  assignmentDeadlinesComment: {
    id: 'assignmentDeadlinesComment',
    defaultMessage: 'Các bài tập sau có hạn nộp không nằm trong khoảng từ ngày bắt đầu đến ngày kết thúc khóa học:',
    description: 'Mô tả cho phần hiển thị những bài tập nằm ngoài khoảng thời gian của khóa học',
  },
  videoDurationShortDescription: {
    id: 'videoDurationShortDescription',
    defaultMessage: 'Kiểm tra độ dài video',
    description: 'Nhãn cho phần mô tả độ dài video trong khóa học',
  },
  videoDurationLongDescription: {
    id: 'videoDurationLongDescription',
    defaultMessage: 'Học viên tương tác tốt nhất với những video ngắn kèm theo hoạt động luyện tập. Hãy đảm bảo 80% hoặc nhiều hơn số video trong khóa học có độ dài dưới 10 phút.',
    description: 'Mô tả cho phần gợi ý người dùng tuân thủ thực hành tốt nhất về độ dài video',
  },
  diverseSequencesShortDescription: {
    id: 'diverseSequencesShortDescription',
    defaultMessage: 'Xây dựng chuỗi học tập đa dạng',
    description: 'Nhãn cho phần mô tả chuỗi nội dung học tập đa dạng',
  },
  diverseSequencesLongDescription: {
    id: 'diverseSequencesLongDescription',
    defaultMessage: 'Nghiên cứu cho thấy trải nghiệm nội dung đa dạng sẽ tăng mức độ tương tác của học viên. Chúng tôi khuyến nghị 80% hoặc hơn các chuỗi học tập hoặc phân đoạn nội dung nên bao gồm nhiều loại nội dung (ví dụ: video, thảo luận, bài tập).',
    description: 'Mô tả cho phần gợi ý người dùng tuân thủ thực hành tốt nhất về việc đa dạng hóa chuỗi nội dung học tập',
  },
  weeklyHighlightsShortDescription: {
    id: 'weeklyHighlightsShortDescription',
    defaultMessage: 'Thiết lập điểm nhấn theo tuần',
    description: 'Nhãn cho phần mô tả điểm nhấn theo tuần',
  },
  weeklyHighlightsLongDescription: {
    id: 'weeklyHighlightsLongDescription',
    defaultMessage: 'Bật và cấu hình các điểm nhấn theo tuần để giữ cho học viên luôn hứng thú và đi đúng tiến độ trong khóa học.',
    description: 'Mô tả cho phần gợi ý người dùng tuân thủ thực hành tốt nhất cho điểm nhấn hàng tuần trong khóa học',
  },
  unitDepthShortDescription: {
    id: 'unitDepthShortDescription',
    defaultMessage: 'Quản lý độ dài nội dung mỗi đơn vị học',
    description: 'Nhãn cho phần mô tả độ sâu/độ dài đơn vị học trong khóa học',
  },
  unitDepthLongDescription: {
    id: 'unitDepthLongDescription',
    defaultMessage: 'Chia nhỏ nội dung khóa học thành những phần vừa phải sẽ giúp tăng mức độ tương tác của học viên. Chúng tôi khuyến nghị mỗi đơn vị (unit) không nên có quá ba thành phần nội dung.',
    description: 'Mô tả cho phần gợi ý người dùng tuân thủ thực hành tốt nhất về độ dài đơn vị học',
  },
  proctoringEmailShortDescription: {
    id: 'proctoringEmailShortDescription',
    defaultMessage: 'Thêm email liên hệ xử lý sự cố Proctortrack',
    description: 'Nhãn cho phần mô tả email xử lý leo thang (escalation) cho proctoring',
  },
  proctoringEmailLongDescription: {
    id: 'proctoringEmailLongDescription',
    defaultMessage: 'Các khóa học sử dụng Proctortrack cần có một email xử lý sự cố. Hãy đảm bảo học viên và bộ phận Hỗ trợ có thể liên hệ nhóm phụ trách khóa học về các vấn đề proctoring (ví dụ: khiếu nại, xin thi lại, v.v.).',
    description: 'Mô tả cho phần gợi ý người dùng thêm email xử lý sự cố Proctortrack cho khóa học',
  },
  updateLinkLabel: {
    id: 'updateLinkLabel',
    defaultMessage: 'Cập nhật',
    description: 'Nhãn cho liên kết dẫn người dùng đến trang nơi họ có thể cập nhật cài đặt',
  },
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} đã hoàn thành',
    description: 'Nhãn mô tả số tác vụ đã hoàn thành trên tổng số tác vụ',
  },
  completedItemLabel: {
    id: 'completedItemLabel',
    defaultMessage: 'đã hoàn thành',
    description: 'Nhãn mô tả một tác vụ đã hoàn thành',
  },
  uncompletedItemLabel: {
    id: 'uncompletedItemLabel',
    defaultMessage: 'chưa hoàn thành',
    description: 'Nhãn mô tả một tác vụ chưa hoàn thành',
  },
});

export default messages;
