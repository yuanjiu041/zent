import * as React from 'react';
import cn from 'classnames';
import AbstractTrigger from '../AbstractTrigger';
import Icon from '../../../icon';
import { IUploadFileItem } from '../../types';

export default class NormalUploadTrigger extends AbstractTrigger<
  IUploadFileItem
> {
  renderFileItemCount() {
    const { availableUploadItemsCount, maxAmount } = this.props;
    if (maxAmount === Infinity) {
      return null;
    }
    return (
      <span className="zent-upload-trigger-text__count">
        {availableUploadItemsCount}/{maxAmount}
      </span>
    );
  }

  render() {
    const { i18n, disabled } = this.props;
    return (
      <div
        className={cn('zent-upload-trigger', {
          ['zent-upload-trigger__disabled']: disabled,
        })}
        onClick={this.clickFileInput}
        onDragOver={this.onTriggerDragOver}
        onDrop={this.onTriggerDrop}
      >
        <Icon type="upload" className="zent-upload-trigger-icon__normal" />
        <span className="zent-upload-trigger-text">
          {i18n.normal.add} {this.renderFileItemCount()}
        </span>
        {this.renderFileInput()}
      </div>
    );
  }
}
