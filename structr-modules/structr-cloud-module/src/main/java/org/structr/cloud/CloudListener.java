/**
 * Copyright (C) 2010-2018 Structr GmbH
 *
 * This file is part of Structr <http://structr.org>.
 *
 * Structr is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * Structr is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Structr.  If not, see <http://www.gnu.org/licenses/>.
 */
package org.structr.cloud;

/**
 * Listener interface that enables you to get updated on the
 * progress of CloudService operations.
 *
 *
 */
public interface CloudListener {

	/**
	 * Called when a transmission is started.
	 */
	public void transmissionStarted();

	/**
	 * Called when a transmission is finished, even if
	 * transmissionAborted() was called before.
	 */
	public void transmissionFinished();

	/**
	 * Called when a transmission is aborted.
	 */
	public void transmissionAborted();

	/**
	 * Can be called by the Ping message to signal
	 * progress to the sender / receiver.
	 *
	 * @param message
	 */
	public void transmissionProgress(String message);
}
