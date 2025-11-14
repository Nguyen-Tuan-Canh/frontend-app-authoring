import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.studio-home.heading.title',
    defaultMessage: 'Trang chủ {studioShortName}',
  },
  addNewCourseBtnText: {
    id: 'course-authoring.studio-home.add-new-course.btn.text',
    defaultMessage: 'Khóa học mới',
  },
  addNewLibraryBtnText: {
    id: 'course-authoring.studio-home.add-new-library.btn.text',
    defaultMessage: 'Thư viện mới',
  },
  homePageLoadFailedMessage: {
    id: 'course-authoring.studio-home.page-load.failed.message',
    defaultMessage: 'Không thể tải trang chủ Studio. Vui lòng thử lại sau.',
  },
  emailStaffBtnText: {
    id: 'course-authoring.studio-home.email-staff.btn.text',
    defaultMessage: 'Gửi email cho bộ phận phụ trách để tạo khóa học',
  },
  defaultSection_1_Title: {
    id: 'course-authoring.studio-home.default-section-1.title',
    defaultMessage: 'Bạn có phải là nhân sự của một khóa học {studioShortName} hiện có không?',
  },
  defaultSection_1_Description: {
    id: 'course-authoring.studio-home.default-section-1.description',
    defaultMessage:
      'Người tạo khóa học phải cấp quyền truy cập cho bạn. Hãy liên hệ với người tạo khóa học hoặc quản trị viên của khóa học mà bạn đang hỗ trợ biên soạn.',
  },
  defaultSection_2_Title: {
    id: 'course-authoring.studio-home.default-section-2.title',
    defaultMessage: 'Tạo khóa học đầu tiên của bạn',
  },
  defaultSection_2_Description: {
    id: 'course-authoring.studio-home.default-section-2.description',
    defaultMessage: 'Khóa học mới của bạn chỉ còn một cú nhấp chuột nữa thôi!',
  },
  btnAddNewCourseText: {
    id: 'course-authoring.studio-home.btn.add-new-course.text',
    defaultMessage: 'Tạo khóa học đầu tiên của bạn',
  },
  btnReRunText: {
    id: 'course-authoring.studio-home.btn.re-run.text',
    defaultMessage: 'Mở lại khóa học',
  },
  btnDropDownText: {
    id: 'course-authoring.studio-home.btn.dropdown.text',
    defaultMessage: 'Thao tác khóa học',
  },
  viewLiveBtnText: {
    id: 'course-authoring.studio-home.btn.view-live.text',
    defaultMessage: 'Xem trực tiếp',
  },
  organizationTitle: {
    id: 'course-authoring.studio-home.organization.title',
    defaultMessage: 'Thiết lập tổ chức và thư viện',
  },
  organizationLabel: {
    id: 'course-authoring.studio-home.organization.label',
    defaultMessage: 'Hiển thị tất cả khóa học trong tổ chức:',
  },
  organizationSubmitBtnText: {
    id: 'course-authoring.studio-home.organization.btn.submit.text',
    defaultMessage: 'Xác nhận',
  },
  organizationInputPlaceholder: {
    id: 'course-authoring.studio-home.organization.input.placeholder',
    defaultMessage: 'Ví dụ: MITx',
  },
  organizationInputNoOptions: {
    id: 'course-authoring.studio-home.organization.input.no-options',
    defaultMessage: 'Không có tùy chọn nào',
  },
  libraryMigrationStatusText: {
    id: 'course-authoring.studio-home.library-v1.card.status',
    description:
      'Status text in v1 library card in studio informing user of its migration status',
    defaultMessage:
      'Thư viện này đã được di chuyển trước đó. Mọi liên kết tới ngân hàng bài tập đã được chuyển sang.',
  },
});

export default messages;
