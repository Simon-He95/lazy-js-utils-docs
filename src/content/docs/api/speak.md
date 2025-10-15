---
title: Speak
description: Speak
---

## SpeechOptions

Speech options for text-to-speech
EN: Configuration for the speech utterance (text, voice, rate, pitch, volume, lang).

```ts
/**
 * Speech options for text-to-speech
 * @description EN: Configuration for the speech utterance (text, voice, rate, pitch, volume, lang).
 */
```

## SpeechResult

Speech options for text-to-speech
EN: Configuration for the speech utterance (text, voice, rate, pitch, volume, lang).

```ts
/**
 * Speech options for text-to-speech
 * @description EN: Configuration for the speech utterance (text, voice, rate, pitch, volume, lang).
 */
```

## speech

Speech options for text-to-speech
EN: Configuration for the speech utterance (text, voice, rate, pitch, volume, lang).

```ts
/**
 * Speech options for text-to-speech
 * @description EN: Configuration for the speech utterance (text, voice, rate, pitch, volume, lang).
 */
```

## SpeechToTextOptions

Speech-to-text options
EN: Options for the SpeechRecognition instance (continuous recognition, interim results, language).

```ts
/**
 * Speech-to-text options
 * @description EN: Options for the SpeechRecognition instance (continuous recognition, interim results, language).
 */
```

## speechToText

语音转文字
EN: Wrapper around the Web SpeechRecognition API. Returns controls to toggle recognition or abort.

```ts
/**
 * 语音转文字
 * @description EN: Wrapper around the Web SpeechRecognition API. Returns controls to toggle recognition or abort.
 * @param options - SpeechToTextOptions or a callback when omitted
 * @param callback - optional callback invoked with recognition results
 * @returns controls { toggle, abort }
 */
```

## VoiceAnalysisError

声音分析错误类
EN: Error class representing problems encountered during voice analysis.

```ts
/**
 * 声音分析错误类
 * @description 用于表示声音分析过程中出现的各种错误
 * @description EN: Error class representing problems encountered during voice analysis.
 * @example
 * ```typescript
 * throw new VoiceAnalysisError('录制失败', 'RECORDING_FAILED', { device: 'microphone' })
 * ```
 */
```

## RecordingController

录制控制器接口
EN: Controller interface for recording operations (stop, status, progress).

```ts
/**
 * 录制控制器接口
 * @description 提供录制过程的控制方法
 * @description EN: Controller interface for recording operations (stop, status, progress).
 */
```

## AnalysisFrame

分析帧数据接口
EN: Single time-point audio analysis frame containing frequency and time-domain data.

```ts
/**
 * 分析帧数据接口
 * @description 单个时间点的音频分析数据
 * @description EN: Single time-point audio analysis frame containing frequency and time-domain data.
 */
```

## Harmonic

谐波信息接口
EN: Harmonic information for a detected harmonic (frequency and amplitude).

```ts
/**
 * 谐波信息接口
 * @description 声音的谐波特征
 * @description EN: Harmonic information for a detected harmonic (frequency and amplitude).
 */
```

## TimbreCharacteristics

音色特征接口
EN: Timbre-related characteristics used to describe voice color.

```ts
/**
 * 音色特征接口
 * @description 声音的音色特征参数
 * @description EN: Timbre-related characteristics used to describe voice color.
 */
```

## VoiceCharacteristics

声音特征接口
EN: Aggregated voice characteristics including pitch, formants, intensity and timbre.

```ts
/**
 * 声音特征接口
 * @description 完整的声音分析结果
 * @description EN: Aggregated voice characteristics including pitch, formants, intensity and timbre.
 */
```

## TTSParameters

TTS 参数接口
EN: Parameters suggested for TTS engines (pitch and rate).

```ts
/**
 * TTS 参数接口
 * @description 文本转语音的参数配置
 * @description EN: Parameters suggested for TTS engines (pitch and rate).
 */
```

## TTSSuggestions

TTS 建议接口
EN: Suggested TTS configuration derived from analysis (voice, pitch, rate, etc.).

```ts
/**
 * TTS 建议接口
 * @description 基于声音分析的 TTS 参数建议
 * @description EN: Suggested TTS configuration derived from analysis (voice, pitch, rate, etc.).
 */
```

## AnalysisResult

分析结果接口
EN: Final analysis output containing voice characteristics and TTS suggestions.

```ts
/**
 * 分析结果接口
 * @description 完整的声音分析结果，包含特征和 TTS 建议
 * @description EN: Final analysis output containing voice characteristics and TTS suggestions.
 */
```

## AudioConstraints

音频约束接口
EN: Media constraints used when requesting microphone access (sampleRate, channelCount, etc.).

```ts
/**
 * 音频约束接口
 * @description 音频录制的约束配置
 * @description EN: Media constraints used when requesting microphone access (sampleRate, channelCount, etc.).
 */
```

## AnalysisOptions

分析选项接口
EN: Options controlling recording duration, FFT size, callbacks and thresholds.

```ts
/**
 * 分析选项接口
 * @description 声音分析的配置选项
 * @description EN: Options controlling recording duration, FFT size, callbacks and thresholds.
 */
```

## VoiceAnalysisConfig

声音分析配置接口
EN: Algorithm-level configuration such as fundamental frequency range and formant/harmonic counts.

```ts
/**
 * 声音分析配置接口
 * @description 声音分析算法的配置参数
 * @description EN: Algorithm-level configuration such as fundamental frequency range and formant/harmonic counts.
 */
```

## VoiceAnalyzer

声音分析器类
EN: VoiceAnalyzer manages microphone recording, real-time analysis and feature extraction.

```ts
/**
 * 声音分析器类
 * @description 提供实时声音录制、分析和特征提取功能
 * @example
 * ```typescript
 * const analyzer = new VoiceAnalyzer()
 * const { result, controller } = await analyzer.analyzeVoice({
 *   duration: 5000,
 *   onProgress: (progress) => console.log(`进度: ${progress * 100}%`)
/**
 * 声音分析器类
 * @description 提供实时声音录制、分析和特征提取功能
 * @description EN: VoiceAnalyzer manages microphone recording, real-time analysis and feature extraction.
 * @example
 * ```typescript
 * const analyzer = new VoiceAnalyzer()
 * const { result, controller } = await analyzer.analyzeVoice({
 *   duration: 5000,
 *   onProgress: (progress) => console.log(`进度: ${progress * 100}%`)
 * })
 *
 * // 手动停止录制
 */
```
