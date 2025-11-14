import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  deniedCollapsibleTitle: {
    id: 'course-authoring.studio-home.collapsible.denied.title',
    defaultMessage: 'Trạng thái yêu cầu quyền tạo khóa học của bạn',
  },
  deniedCollapsibleDescription: {
    id: 'course-authoring.studio-home.collapsible.denied.description',
    defaultMessage: '{studioName} là giải pháp được lưu trữ dành cho các đối tác xConsortium và một số khách mời được chọn. Các khóa học mà bạn là thành viên trong nhóm sẽ xuất hiện ở phía trên để bạn chỉnh sửa, trong khi quyền tạo khóa học được cấp bởi {platformName}. Đội ngũ của chúng tôi đã hoàn tất việc đánh giá yêu cầu của bạn.',
  },
  deniedCollapsibleActionTitle: {
    id: 'course-authoring.studio-home.collapsible.denied.action.title',
    defaultMessage: 'Trạng thái yêu cầu quyền tạo khóa học của bạn:',
  },
  deniedCollapsibleState: {
    id: 'course-authoring.studio-home.collapsible.denied.state',
    defaultMessage: 'Bị từ chối',
  },
  deniedCollapsibleActionText: {
    id: 'course-authoring.studio-home.collapsible.denied.action.text',
    defaultMessage: 'Yêu cầu của bạn không đáp ứng các tiêu chí/hướng dẫn do đội ngũ {platformName} đưa ra.',
  },

  pendingCollapsibleTitle: {
    id: 'course-authoring.studio-home.collapsible.pending.title',
    defaultMessage: 'Trạng thái yêu cầu quyền tạo khóa học của bạn',
  },
  pendingCollapsibleDescription: {
    id: 'course-authoring.studio-home.collapsible.pending.description',
    defaultMessage: '{studioName} là giải pháp được lưu trữ dành cho các đối tác xConsortium và một số khách mời được chọn. Các khóa học mà bạn là thành viên trong nhóm sẽ xuất hiện ở phía trên để bạn chỉnh sửa, trong khi quyền tạo khóa học được cấp bởi {platformName}. Đội ngũ của chúng tôi hiện đang đánh giá yêu cầu của bạn.',
  },
  pendingCollapsibleActionTitle: {
    id: 'course-authoring.studio-home.collapsible.pending.action.title',
    defaultMessage: 'Trạng thái yêu cầu quyền tạo khóa học của bạn:',
  },
  pendingCollapsibleState: {
    id: 'course-authoring.studio-home.collapsible.pending.state',
    defaultMessage: 'Đang chờ duyệt',
  },
  pendingCollapsibleActionText: {
    id: 'course-authoring.studio-home.collapsible.pending.action.text',
    defaultMessage: 'Yêu cầu của bạn hiện đang được đội ngũ {platformName} xem xét và sẽ sớm được cập nhật.',
  },

  unrequestedCollapsibleTitle: {
    id: 'course-authoring.studio-home.collapsible.unrequested.title',
    defaultMessage: 'Trở thành người tạo khóa học trong {studioShortName}',
  },
  unrequestedCollapsibleDescription: {
    id: 'course-authoring.studio-home.collapsible.unrequested.description',
    defaultMessage: '{studioName} là giải pháp được lưu trữ dành cho các đối tác xConsortium và một số khách mời được chọn. Các khóa học mà bạn là thành viên trong nhóm sẽ xuất hiện ở phía trên để bạn chỉnh sửa, trong khi quyền tạo khóa học được cấp bởi {platformName}. Đội ngũ của chúng tôi sẽ đánh giá yêu cầu của bạn và phản hồi trong vòng 24 giờ (ngày làm việc).',
  },
  unrequestedCollapsibleDefaultButton: {
    id: 'course-authoring.studio-home.collapsible.unrequested.button.default',
    defaultMessage: 'Yêu cầu quyền tạo khóa học',
  },
  unrequestedCollapsiblePendingButton: {
    id: 'course-authoring.studio-home.collapsible.unrequested.button.pending',
    defaultMessage: 'Đang gửi yêu cầu của bạn',
  },
  unrequestedCollapsibleFailedButton: {
    id: 'course-authoring.studio-home.collapsible.unrequested.button.failed',
    defaultMessage: 'Rất tiếc, đã có lỗi xảy ra với yêu cầu của bạn',
  },
});

export default messages;
