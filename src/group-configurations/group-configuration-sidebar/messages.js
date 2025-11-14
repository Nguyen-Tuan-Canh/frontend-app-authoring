import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  aboutTitle: {
    id: 'course-authoring.group-configurations.sidebar.about.title',
    defaultMessage: 'Nhóm nội dung',
    description: 'Tiêu đề cho phần nhóm nội dung trong sidebar.',
  },
  aboutDescription_1: {
    id: 'course-authoring.group-configurations.sidebar.about.description-1',
    defaultMessage: 'Nếu bạn đã bật cohort trong khóa học, bạn có thể dùng nhóm nội dung để tạo nội dung khóa học riêng cho từng cohort. Nói cách khác, bạn có thể tùy biến nội dung mà các cohort cụ thể được xem trong khóa học.',
    description: 'Mô tả thứ nhất cho phần nhóm nội dung trong sidebar.',
  },
  aboutDescription_2: {
    id: 'course-authoring.group-configurations.sidebar.about.description-2',
    defaultMessage: 'Mỗi nhóm nội dung mà bạn tạo có thể được gắn với một hoặc nhiều cohort. Bên cạnh việc cung cấp nội dung khóa học cho tất cả người học, bạn có thể giới hạn quyền truy cập một số nội dung chỉ cho người học thuộc các nhóm nội dung cụ thể. Chỉ những người học trong các cohort được gắn với các nhóm nội dung đó mới thấy phần nội dung bổ sung.',
    description: 'Mô tả thứ hai cho phần nhóm nội dung trong sidebar.',
  },
  aboutDescription_3: {
    id: 'course-authoring.group-configurations.sidebar.about.description-3',
    defaultMessage: 'Nhấn {strongText} để thêm một nhóm nội dung mới. Để chỉnh sửa tên nhóm nội dung, di chuột lên khung của nhóm và nhấn {strongText2}. Bạn chỉ có thể xóa nhóm nội dung nếu nhóm đó không được bất kỳ đơn vị (unit) nào sử dụng. Để xóa nhóm nội dung, di chuột lên khung của nhóm và nhấn vào biểu tượng xóa.',
    description: 'Mô tả thứ ba cho phần nhóm nội dung trong sidebar. Nêu cách thêm, sửa và xóa nhóm nội dung.',
  },
  aboutDescription_3_strong: {
    id: 'course-authoring.group-configurations.sidebar.about.description-3.strong',
    defaultMessage: 'Nhóm nội dung mới',
    description: 'Chữ in đậm (nhãn nút) dùng trong mô tả thứ ba để thêm nhóm nội dung mới.',
  },
  about_2_title: {
    id: 'course-authoring.group-configurations.sidebar.about-2.title',
    defaultMessage: 'Cấu hình nhóm thử nghiệm',
    description: 'Tiêu đề cho phần cấu hình nhóm thử nghiệm trong sidebar.',
  },
  about_2_description_1: {
    id: 'course-authoring.group-configurations.sidebar.about-2.description-1',
    defaultMessage: 'Hãy sử dụng cấu hình nhóm thử nghiệm nếu bạn đang thực hiện các thử nghiệm nội dung (content experiment), còn gọi là A/B testing, trong khóa học. Cấu hình nhóm thử nghiệm xác định số nhóm người học tham gia một thử nghiệm nội dung. Khi bạn tạo một thử nghiệm nội dung cho khóa học, bạn sẽ chọn cấu hình nhóm cần dùng.',
    description: 'Mô tả thứ nhất cho phần cấu hình nhóm thử nghiệm trong sidebar.',
  },
  about_2_description_2: {
    id: 'course-authoring.group-configurations.sidebar.about-2.description-2',
    defaultMessage: 'Nhấn {strongText} để thêm một cấu hình mới. Để chỉnh sửa cấu hình, di chuột lên khung của cấu hình và nhấn {strongText2}. Bạn chỉ có thể xóa cấu hình nhóm nếu cấu hình đó không được sử dụng trong bất kỳ thử nghiệm nào. Để xóa cấu hình, di chuột lên khung của cấu hình và nhấn vào biểu tượng xóa.',
    description: 'Mô tả thứ hai cho phần cấu hình nhóm thử nghiệm trong sidebar. Nêu cách thêm, sửa và xóa cấu hình nhóm.',
  },
  about_2_description_2_strong: {
    id: 'course-authoring.group-configurations.sidebar.about-2.description-2.strong',
    defaultMessage: 'Cấu hình nhóm mới',
    description: 'Chữ in đậm (nhãn nút) dùng trong mô tả thứ hai để thêm cấu hình nhóm mới.',
  },
  about_3_title: {
    id: 'course-authoring.group-configurations.sidebar.about-3.title',
    defaultMessage: 'Nhóm theo loại ghi danh',
    description: 'Tiêu đề cho phần nhóm theo loại ghi danh trong sidebar.',
  },
  about_3_description_1: {
    id: 'course-authoring.group-configurations.sidebar.about-3.description-1',
    defaultMessage: 'Các nhóm theo loại ghi danh cho phép bạn cung cấp nội dung khóa học khác nhau cho người học ở từng loại ghi danh. Người học ghi danh theo mỗi loại trong khóa học sẽ tự động thuộc vào nhóm tương ứng.',
    description: 'Mô tả thứ nhất cho phần nhóm theo loại ghi danh trong sidebar.',
  },
  about_3_description_2: {
    id: 'course-authoring.group-configurations.sidebar.about-3.description-2',
    defaultMessage: 'Trên các trang đơn vị (unit) trong dàn ý khóa học, bạn có thể giới hạn quyền truy cập vào các thành phần dựa trên loại ghi danh của người học.',
    description: 'Mô tả thứ hai cho phần nhóm theo loại ghi danh trong sidebar.',
  },
  about_3_description_3: {
    id: 'course-authoring.group-configurations.sidebar.about-3.description-3',
    defaultMessage: 'Bạn không thể chỉnh sửa các nhóm theo loại ghi danh, nhưng bạn có thể mở rộng từng nhóm để xem chi tiết nội dung khóa học được gán cho người học trong nhóm đó.',
    description: 'Mô tả thứ ba cho phần nhóm theo loại ghi danh trong sidebar. Nêu các giới hạn và tùy chọn quản lý.',
  },
  aboutDescription_strong_edit: {
    id: 'course-authoring.group-configurations.sidebar.about.description.strong-edit',
    defaultMessage: 'chỉnh sửa',
    description: 'Chữ in đậm dùng để chỉ hành động chỉnh sửa.',
  },
  learnMoreBtn: {
    id: 'course-authoring.group-configurations.sidebar.learnmore.button',
    defaultMessage: 'Tìm hiểu thêm',
    description: 'Nhãn cho nút "Tìm hiểu thêm" trong sidebar.',
  },
});

export default messages;
