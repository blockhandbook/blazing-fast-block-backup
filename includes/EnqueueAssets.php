<?php
/**
 * Enqueue script and style assets.
 *
 * @package BlazingFastBlockBackup
 */

namespace BlazingFastBlockBackup;

/**
 * Enqueue script and style assets.
 *
 * @since 1.0.0
 */
class EnqueueAssets {

	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'enqueue_styles' ) );
	}

	/**
	 * Enqueue styles.
	 *
	 * @return void
	 */
	public function enqueue_styles() {

		// Enqueue tailwind styles.
		wp_enqueue_style(
			BLAZING_FAST_BLOCK_BACKUP_PLUGIN_SLUG . '-tailwind',
			BLAZING_FAST_BLOCK_BACKUP_PLUGIN_URL . 'build/tailwind.css',
			array(),
			BLAZING_FAST_BLOCK_BACKUP_PLUGIN_VERSION
		);
	}
}
