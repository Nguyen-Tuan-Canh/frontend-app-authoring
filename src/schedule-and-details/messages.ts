import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.schedule.heading.title',
    defaultMessage: 'Lịch & chi tiết khóa học',
  },
  headingSubtitle: {
    id: 'course-authoring.schedule.heading.subtitle',
    defaultMessage: 'Thiết lập',
  },
  buttonSaveText: {
    id: 'course-authoring.schedule.alert.button.save',
    defaultMessage: 'Lưu thay đổi',
  },
  buttonSavingText: {
    id: 'course-authoring.schedule.alert.button.saving',
    defaultMessage: 'Đang lưu',
  },
  buttonCancelText: {
    id: 'course-authoring.schedule.alert.button.cancel',
    defaultMessage: 'Hủy',
  },
  alertWarningAriaLabelledby: {
    id: 'course-authoring.schedule.alert.warning.aria.labelledby',
    defaultMessage: 'notification-warning-title',
  },
  alertWarningAriaDescribedby: {
    id: 'course-authoring.schedule.alert.warning.aria.describedby',
    defaultMessage: 'notification-warning-description',
  },
  alertWarning: {
    id: 'course-authoring.schedule.alert.warning',
    defaultMessage: 'Bạn đã có một số thay đổi',
  },
  alertWarningOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.error',
    defaultMessage: 'Bạn đã có một số thay đổi, nhưng vẫn còn một số lỗi',
  },
  alertWarningDescriptions: {
    id: 'course-authoring.schedule.alert.warning.descriptions',
    defaultMessage: 'Các thay đổi sẽ chưa có hiệu lực cho đến khi bạn lưu lại.',
  },
  alertWarningDescriptionsOnSaveWithError: {
    id: 'course-authoring.schedule.alert.warning.save.descriptions.error',
    defaultMessage: 'Vui lòng xử lý các lỗi trên trang này trước, sau đó lưu lại.',
  },
  alertSuccessAriaLabelledby: {
    id: 'course-authoring.schedule.alert.success.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertSuccessAriaDescribedby: {
    id: 'course-authoring.schedule.alert.success.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertSuccess: {
    id: 'course-authoring.schedule.alert.success',
    defaultMessage: 'Các thay đổi của bạn đã được lưu.',
  },
  alertLoadFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertLoadFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.load.fail.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertLoadFail: {
    id: 'course-authoring.schedule.alert.load.fail',
    defaultMessage: 'Đã xảy ra lỗi khi tải các thiết lập của bạn.',
  },
  alertFailAriaLabelledby: {
    id: 'course-authoring.schedule.alert.fail.aria.labelledby',
    defaultMessage: 'alert-confirmation-title',
  },
  alertFailAriaDescribedby: {
    id: 'course-authoring.schedule.alert.fail.aria.describedby',
    defaultMessage: 'alert-confirmation-description',
  },
  alertFail: {
    id: 'course-authoring.schedule.alert.fail',
    defaultMessage: 'Đã xảy ra lỗi khi lưu các thay đổi của bạn.',
  },
  errorMessage1: {
    id: 'course-authoring.schedule.schedule-section.error-message-1',
    defaultMessage: 'Hành vi hiển thị chứng chỉ phải được đặt thành “Một ngày sau ngày kết thúc khóa học” nếu bạn đã thiết lập ngày chứng chỉ khả dụng.',
  },
  errorMessage2: {
    id: 'course-authoring.schedule.schedule-section.error-message-2',
    defaultMessage: 'Ngày kết thúc ghi danh không được sau ngày kết thúc khóa học.',
  },
  errorMessage3: {
    id: 'course-authoring.schedule.schedule-section.error-message-3',
    defaultMessage: 'Ngày bắt đầu ghi danh không được sau ngày kết thúc ghi danh.',
  },
  errorMessage4: {
    id: 'course-authoring.schedule.schedule-section.error-message-4',
    defaultMessage: 'Ngày bắt đầu khóa học phải muộn hơn ngày bắt đầu ghi danh.',
  },
  errorMessage5: {
    id: 'course-authoring.schedule.schedule-section.error-message-5',
    defaultMessage: 'Ngày kết thúc khóa học phải muộn hơn ngày bắt đầu khóa học.',
  },
  errorMessage6: {
    id: 'course-authoring.schedule.schedule-section.error-message-6',
    defaultMessage: 'Ngày chứng chỉ khả dụng phải muộn hơn ngày kết thúc khóa học.',
  },
  errorMessage7: {
    id: 'course-authoring.schedule.schedule-section.error-message-7',
    defaultMessage: 'Khóa học phải được thiết lập ngày bắt đầu.',
  },
  errorMessage8: {
    id: 'course-authoring.schedule.schedule-section.error-message-8',
    defaultMessage: 'Vui lòng nhập một số nguyên trong khoảng từ %(min)s đến %(max)s.',
  },
});

export default messages;
