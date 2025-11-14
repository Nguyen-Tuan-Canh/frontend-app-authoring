import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  newSectionButton: {
    id: 'course-authoring.course-outline.header-navigations.button.new-section',
    defaultMessage: 'Phần mới',
  },
  newSectionButtonTooltip: {
    id: 'course-authoring.course-outline.header-navigations.button.new-section.tooltip',
    defaultMessage: 'Thêm một phần (section) mới',
  },
  reindexButton: {
    id: 'course-authoring.course-outline.header-navigations.button.reindex',
    defaultMessage: 'Lập chỉ mục lại',
  },
  reindexButtonTooltip: {
    id: 'course-authoring.course-outline.header-navigations.button.reindex.tooltip',
    defaultMessage: 'Lập chỉ mục lại khóa học hiện tại',
  },
  expandAllButton: {
    id: 'course-authoring.course-outline.header-navigations.button.expand-all',
    defaultMessage: 'Mở rộng tất cả',
  },
  collapseAllButton: {
    id: 'course-authoring.course-outline.header-navigations.button.collapse-all',
    defaultMessage: 'Thu gọn tất cả',
  },
  viewLiveButton: {
    id: 'course-authoring.course-outline.header-navigations.button.view-live',
    defaultMessage: 'Xem bản đang hiển thị',
  },
  viewLiveButtonTooltip: {
    id: 'course-authoring.course-outline.header-navigations.button.view-live.tooltip',
    defaultMessage: 'Nhấp để mở nội dung khóa học trong LMS ở tab mới',
  },
});

export default messages;
