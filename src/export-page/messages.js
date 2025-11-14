import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.export.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.export.heading.title',
    defaultMessage: 'Xuất khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.export.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  description1: {
    id: 'course-authoring.export.description1',
    defaultMessage: 'Bạn có thể xuất khóa học và chỉnh sửa chúng bên ngoài {studioShortName}. Tệp được xuất là tệp .tar.gz (tức là tệp .tar được nén bằng GNU Zip) và chứa cấu trúc cùng nội dung khóa học. Bạn cũng có thể nhập lại các khóa học mà bạn đã xuất.',
  },
  description2: {
    id: 'course-authoring.export.description2',
    defaultMessage: 'Lưu ý: Khi bạn xuất một khóa học, các thông tin như khóa API MATLAB, LTI passports, chuỗi token bí mật cho annotation và URL lưu trữ annotation cũng sẽ được đưa vào dữ liệu xuất. Nếu bạn chia sẻ tệp đã xuất, bạn cũng có thể đang chia sẻ thông tin nhạy cảm hoặc thông tin liên quan đến giấy phép.',
  },
  titleUnderButton: {
    id: 'course-authoring.export.title-under-button',
    defaultMessage: 'Xuất nội dung khóa học của tôi',
  },
  buttonTitle: {
    id: 'course-authoring.export.button.title',
    defaultMessage: 'Xuất nội dung khóa học',
  },
});

export default messages;