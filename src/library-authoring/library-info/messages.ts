import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  editNameButtonAlt: {
    id: 'course-authoring.library-authoring.sidebar.info.edit-name.alt',
    defaultMessage: 'Chỉnh sửa tên thư viện',
    description: 'Alt text for edit library name icon button',
  },
  organizationSectionTitle: {
    id: 'course-authoring.library-authoring.sidebar.info.organization.title',
    defaultMessage: 'Đơn vị',
    description: 'Title for Organization section in Library info sidebar.',
  },
  libraryTeamButtonTitle: {
    id: 'course-authoring.library-authoring.sidebar.info.library-team.button.title',
    defaultMessage: 'Quản lý quyền truy cập',
    description: 'Title to use for the button that allows viewing/editing the Library Team user access.',
  },
  libraryHistorySectionTitle: {
    id: 'course-authoring.library-authoring.sidebar.info.history.title',
    defaultMessage: 'Lịch sử thư viện',
    description: 'Title for Library History section in Library info sidebar.',
  },
  lastModifiedLabel: {
    id: 'course-authoring.library-authoring.sidebar.info.history.last-modified',
    defaultMessage: 'Chỉnh sửa lần cuối',
    description: 'Last Modified label used in Library History section.',
  },
  createdLabel: {
    id: 'course-authoring.library-authoring.sidebar.info.history.created',
    defaultMessage: 'Ngày tạo',
    description: 'Created label used in Library History section.',
  },
  publishSuccessMsg: {
    id: 'course-authoring.library-authoring.publish.success',
    defaultMessage: 'Đã xuất bản thư viện thành công',
    description: 'Message when the library is published successfully.',
  },
  publishErrorMsg: {
    id: 'course-authoring.library-authoring.publish.error',
    defaultMessage: 'Đã xảy ra lỗi khi xuất bản thư viện.',
    description: 'Message when there is an error when publishing the library.',
  },
  revertSuccessMsg: {
    id: 'course-authoring.library-authoring.revert.success',
    defaultMessage: 'Đã hoàn tác thay đổi trong thư viện thành công',
    description: 'Message when the library changes are reverted successfully.',
  },
  revertErrorMsg: {
    id: 'course-authoring.library-authoring.revert.error',
    defaultMessage: 'Đã xảy ra lỗi khi hoàn tác các thay đổi trong thư viện.',
    description: 'Message when there is an error when reverting changes in the library.',
  },
  updateLibrarySuccessMsg: {
    id: 'course-authoring.library-authoring.library.update.success',
    defaultMessage: 'Đã cập nhật thư viện thành công',
    description: 'Message when the library is updated successfully',
  },
  updateLibraryErrorMsg: {
    id: 'course-authoring.library-authoring.library.update.error',
    defaultMessage: 'Đã xảy ra lỗi khi cập nhật thư viện',
    description: 'Message when there is an error when updating the library',
  },
  discardChangesTitle: {
    id: 'course-authoring.library-authoring.library.discardChangesTitle',
    defaultMessage: 'Hủy bỏ thay đổi',
    description: 'Title text for confirmation modal shown before discard library changes',
  },
  discardChangesDescription: {
    id: 'course-authoring.library-authoring.library.discardChangesDescription',
    defaultMessage: 'Bạn có chắc chắn muốn hủy tất cả các thay đổi chưa xuất bản trong thư viện này không? Thao tác này sẽ bao gồm cả các thay đổi do người dùng khác thực hiện.',
    description: 'Description text for confirmation modal shown before discard library changes',
  },
  discardChangesDefaultBtnLabel: {
    id: 'course-authoring.library-authoring.library.discardChangesDefaultBtnLabel',
    defaultMessage: 'Hủy bỏ',
    description: 'Button text for confirmation modal shown before discard library changes',
  },
  publishLibraryButtonLabel: {
    id: 'course-authoring.library-authoring.library.publishLibraryButtonLabel',
    defaultMessage: 'Xuất bản tất cả',
    description: 'Button text for publish library button',
  },
});

export default messages;
