import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  pageTitle: {
    id: 'course-authoring.course-optimizer.page.title',
    defaultMessage: '{headingTitle} | {courseName} | {siteName}',
  },
  headingTitle: {
    id: 'course-authoring.course-optimizer.heading.title',
    defaultMessage: 'Trình tối ưu khóa học',
  },
  new: {
    id: 'course-authoring.course-optimizer.new',
    defaultMessage: 'Mới',
  },
  headingSubtitle: {
    id: 'course-authoring.course-optimizer.heading.subtitle',
    defaultMessage: 'Công cụ',
  },
  description: {
    id: 'course-authoring.course-optimizer.description',
    defaultMessage: 'Công cụ này sẽ quét khóa học của bạn để tìm các liên kết bị hỏng và những liên kết trỏ đến các trang trong lần chạy khóa học trước. Các thay đổi chưa xuất bản sẽ không được đưa vào quá trình quét. Lưu ý: với các khóa học lớn, quá trình này có thể mất nhiều thời gian hơn.',
  },
  card1Title: {
    id: 'course-authoring.course-optimizer.card1.title',
    defaultMessage: 'Quét khóa học của tôi',
  },
  buttonTitle: {
    id: 'course-authoring.course-optimizer.button.title',
    defaultMessage: 'Quét khóa học',
  },
  preparingStepTitle: {
    id: 'course-authoring.course-optimizer.peparing-step.title',
    defaultMessage: 'Đang chuẩn bị',
  },
  preparingStepDescription: {
    id: 'course-authoring.course-optimizer.peparing-step.description',
    defaultMessage: 'Đang chuẩn bị để bắt đầu quét',
  },
  scanningStepTitle: {
    id: 'course-authoring.course-optimizer.scanning-step.title',
    defaultMessage: 'Đang quét',
  },
  scanningStepDescription: {
    id: 'course-authoring.course-optimizer.scanning-step.description',
    defaultMessage: 'Đang quét các liên kết bị hỏng trong khóa học của bạn (Bạn có thể rời khỏi trang này an toàn, nhưng nên tránh thay đổi nội dung quá nhiều cho đến khi quá trình quét hoàn tất)',
  },
  successStepTitle: {
    id: 'course-authoring.course-optimizer.success-step.title',
    defaultMessage: 'Hoàn tất',
  },
  successStepDescription: {
    id: 'course-authoring.course-optimizer.success-step.description',
    defaultMessage: 'Đã quét xong. Bạn có thể xem danh sách kết quả bên dưới.',
  },
  lastScannedOn: {
    id: 'course-authoring.course-optimizer.last-scanned-on',
    defaultMessage: 'Lần quét gần nhất vào',
  },
  scanHeader: {
    id: 'course-authoring.course-optimizer.scanHeader',
    defaultMessage: 'Kết quả quét',
  },
  updateButton: {
    id: 'course-authoring.scanResults.updateButton',
    defaultMessage: 'Cập nhật',
  },
  updated: {
    id: 'course-authoring.scanResults.updated',
    defaultMessage: 'Đã cập nhật',
  },
});

export default messages;
