/*
 * Unless explicitly stated otherwise all files in this repository are licensed
 * under the Apache 2.0 license (see LICENSE).
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020 Datadog, Inc.
 */

import { SpanKind, SpanStatusCode, TraceFlags } from '@opentelemetry/api';
// import { ReadableSpan } from '@opentelemetry/tracing';
import { Resource } from '@opentelemetry/resources';
import { TraceState } from '@opentelemetry/core';

export const mockResourceServiceName = 'otel-resource-service-name';

export const mockSpanContextUnsampled = {
  traceId: 'd4cda95b652f4a1592b449d5929fda1b',
  spanId: '6e0c63257de34c92',
  traceFlags: TraceFlags.NONE,
};

export const mockSpanContextSampled = {
  traceId: 'd4cda95b652f4a1592b449d5929fda1b',
  spanId: '6e0c63257de34c92',
  traceFlags: TraceFlags.SAMPLED,
};

export const mockSpanContextOrigin = {
  traceId: 'd4cda95b652f4a1592b449d5929fda1b',
  spanId: '6e0c63257de34c92',
  traceFlags: TraceFlags.SAMPLED,
  traceState: new TraceState('dd_origin=synthetics-example'),
};

export const mockReadableSpan: any = {
  name: 'my-span1',
  kind: SpanKind.CLIENT,
  spanContext: mockSpanContextUnsampled,
  startTime: [1566156729, 709],
  endTime: [1566156731, 709],
  ended: true,
  status: {
    code: SpanStatusCode.ERROR,
  },
  attributes: {},
  links: [],
  events: [],
  duration: [32, 800000000],
  resource: Resource.empty(),
  instrumentationLibrary: {
    name: 'default',
    version: '0.0.1',
  },
};

export const mockExandedReadableSpan: any = {
  name: 'my-span',
  kind: SpanKind.INTERNAL,
  spanContext: mockSpanContextUnsampled,
  startTime: [1566156729, 709],
  endTime: [1566156731, 709],
  ended: true,
  status: {
    code: SpanStatusCode.OK,
  },
  attributes: {
    testBool: true,
    testString: 'test',
    testNum: '3.142',
  },
  links: [
    {
      context: {
        traceId: 'a4cda95b652f4a1592b449d5929fda1b',
        spanId: '3e0c63257de34c92',
      },
      attributes: {
        testBool: true,
        testString: 'test',
        testNum: 3.142,
      },
    },
  ],
  events: [
    {
      name: 'something happened',
      attributes: {
        error: true,
      },
      time: [1566156729, 809],
    },
  ],
  duration: [32, 800000000],
  resource: new Resource({
    zervice: 'ui',
    otherInfo: 'one',
    cost: 112.12,
  }),
  instrumentationLibrary: {
    name: 'default',
    version: '0.0.1',
  },
};

export const mockExandedReadableSpanWithResourceService: any = {
  name: 'my-span',
  kind: SpanKind.INTERNAL,
  spanContext: mockSpanContextUnsampled,
  startTime: [1566156729, 709],
  endTime: [1566156731, 709],
  ended: true,
  status: {
    code: SpanStatusCode.OK,
  },
  attributes: {
    testBool: true,
    testString: 'test',
    testNum: '3.142',
  },
  links: [
    {
      context: {
        traceId: 'a4cda95b652f4a1592b449d5929fda1b',
        spanId: '3e0c63257de34c92',
      },
      attributes: {
        testBool: true,
        testString: 'test',
        testNum: 3.142,
      },
    },
  ],
  events: [
    {
      name: 'something happened',
      attributes: {
        error: true,
      },
      time: [1566156729, 809],
    },
  ],
  duration: [32, 800000000],
  resource: new Resource({
    'service.name': mockResourceServiceName,
    otherInfo: 'one',
    cost: 112.12,
  }),
  instrumentationLibrary: {
    name: 'default',
    version: '0.0.1',
  },
};
